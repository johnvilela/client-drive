import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import z from 'zod';

export enum EmailStatus {
  NOT_REGISTERED = 'NOT_REGISTERED',
  REGISTERED = 'REGISTERED',
  PENDING = 'PENDING',
}

const UserSimpleSchema = z.object({
  isRegistered: z.boolean(),
});

export const CheckEmailStatusDTO = z.object({
  email: z.string().email(),
});

export const userModule = {
  checkEmailStatus: async ({ email }: z.infer<typeof CheckEmailStatusDTO>) => {
    const docRef = doc(db, 'userSimple', email);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return EmailStatus.NOT_REGISTERED;
    }

    const data = docSnap.data() as z.infer<typeof UserSimpleSchema>;

    return data.isRegistered ? EmailStatus.REGISTERED : EmailStatus.PENDING;
  },
};
