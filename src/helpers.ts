import { object, string } from 'yup';

export const userSchema = object({
	firstName: string().min(3),
	lastName: string().min(3),
	phone: string().length(8),
	flat: string().min(15),
	area: string().min(15),
	landmark: string().min(15),
	pinCode: string().length(6),
});
