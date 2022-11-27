<?php

enum ESqlSearchByType {
    case EQUAL;
    case TEXT;
    case NUMERIC_RANGES;
}

abstract class Utils {
    static public function imageFileWrapLink(string &$imageName): void {
        self::wrapWithLink('images', $imageName);
    }

    static private function wrapWithLink(string $dir, string &$file): void {
        $file = 'http://' . $_SERVER['HTTP_HOST'] . "/$dir/$file";
    }

    static public function numberify(string &$variable): void {
        $variable = (int)$variable;
    }

    static public function floatify(string &$variable): void {
        $variable = (float)$variable;
    }

    static public function generateSqlWhereWithParams(array $config): array {
        $filters = new RequestDataReaderJson();
        $where = [];
        $params = [];
        $i = 1;
        foreach ($config as $field => $type) switch ($type) {
            case ESqlSearchByType::EQUAL:
                if (!isset($filters[$field])) break;
                $where[] = $field . ' = $' . $i++;
                $params[] = $filters[$field];
                break;
            case ESqlSearchByType::TEXT:
                if (!isset($filters[$field])) break;
                $where[] = 'LOWER(' . $field . ') LIKE LOWER($' . $i++ . ')';
                $params[] = "%$filters[$field]%";
                break;
            case ESqlSearchByType::NUMERIC_RANGES:
                $field__e = $field . '__e';
                $field__lt = $field . '__lt';
                $field__gt = $field . '__gt';
                $field__lte = $field . '__lte';
                $field__gte = $field . '__gte';
                if (isset($filters[$field])) {
                    $where[] = $field . '::text LIKE $' . $i++;
                    $params[] = "%$filters[$field]%";
                }
                if (isset($filters[$field__e])) {
                    $where[] = $field . ' = $' . $i++;
                    $params[] = $filters[$field__e];
                }
                if (isset($filters[$field__lt])) {
                    $where[] = $field . ' < $' . $i++;
                    $params[] = $filters[$field__lt];
                }
                if (isset($filters[$field__gt])) {
                    $where[] = $field . ' > $' . $i++;
                    $params[] = $filters[$field__gt];
                }
                if (isset($filters[$field__lte])) {
                    $where[] = $field . ' <= $' . $i++;
                    $params[] = $filters[$field__lte];
                }
                if (isset($filters[$field__gte])) {
                    $where[] = $field . ' >= $' . $i++;
                    $params[] = $filters[$field__gte];
                }
                break;
        }
        $where = join(' AND ', $where);
        return ['where' => $where, 'params' => $params];
    }
}