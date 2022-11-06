export interface RequestValidator {
  validate: (data: unknown) => Promise<boolean>
}
