/**
 * Converts a snake_case string to camelCase
 */
export function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Recursively transforms an object's keys from snake_case to camelCase
 */
export function transformKeysToCamelCase<T>(obj: any): T {
  if (Array.isArray(obj)) {
    return obj.map((item) => transformKeysToCamelCase(item)) as unknown as T;
  }

  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((result, key) => {
      const camelKey = snakeToCamel(key);
      result[camelKey] = transformKeysToCamelCase(obj[key]);
      return result;
    }, {} as any) as T;
  }

  return obj as T;
}
