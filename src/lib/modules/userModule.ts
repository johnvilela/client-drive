import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../services/firebase';
import z from 'zod';

export enum EmailStatus {
  NOT_REGISTERED = 'NOT_REGISTERED',
  REGISTERED = 'REGISTERED',
  PENDING = 'PENDING',
}

export enum UserType {
  CLIENT = 'CLIENT',
  ADMIN = 'ADMIN',
}

const UserSimpleSchema = z.object({
  isRegistered: z.boolean(),
  type: z.nativeEnum(UserType),
});

export const CheckEmailStatusDTO = z.object({
  email: z.string().email(),
});

export const CreateUserDTO = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const userModule = {
  checkEmailStatus: async ({ email }: z.infer<typeof CheckEmailStatusDTO>) => {
    try {
      const docRef = doc(db, 'userSimple', email);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        return EmailStatus.NOT_REGISTERED;
      }

      const data = docSnap.data() as z.infer<typeof UserSimpleSchema>;

      return data.isRegistered ? EmailStatus.REGISTERED : EmailStatus.PENDING;
    } catch (err) {
      console.error(err);
      return EmailStatus.NOT_REGISTERED;
    }
  },

  createUser: async ({ email, password }: z.infer<typeof CreateUserDTO>) => {
    try {
      const userSession = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const simpleRef = doc(db, 'userSimple', email);

      await updateDoc(simpleRef, { isRegistered: true });

      const userSimple = await getDoc(simpleRef);

      const completeRef = doc(db, 'user', userSession.user.uid);

      await setDoc(completeRef, {
        email,
        type: userSimple.data()?.type || UserType.CLIENT,
      });

      return userSimple.data()?.type || UserType.CLIENT;
    } catch (error) {
      console.error(error);

      return error;
    }
  },
};
