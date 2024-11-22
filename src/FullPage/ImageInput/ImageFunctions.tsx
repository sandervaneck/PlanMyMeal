export const returnStringsIfNotNullOrUndefined = (
  a: string[] | null | undefined
): string[] => (checkIfStringsNotNullOrUndefined(a) ? a! : [""]);

export const checkIfStringsNotNullOrUndefined = (
  a: string[] | null | undefined
): boolean => a !== undefined && a !== null;

export const readFileAsDataURL = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
