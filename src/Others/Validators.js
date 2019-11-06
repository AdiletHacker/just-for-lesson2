

export const require = value => value ? undefined : 'Required!';

const maxLength = max => value => value && value.length > max ? `Max length must be ${max} or less!` : undefined;
export const maxLength10 = maxLength(10);



















