export const steps = ['guestForm', 'menu', 'orderReview', 'orderComplete'] as const;

export type Step = typeof steps[number];
