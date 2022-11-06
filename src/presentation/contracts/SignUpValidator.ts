export interface SignUpValidator {
  validate: (data: unknown) => Promise<boolean>
}
