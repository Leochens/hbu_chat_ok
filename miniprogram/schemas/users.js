import { schema } from '../libs/normalizr';
const userSchema = new schema.Entity('users', {}, { idAttribute: 'id' });

export default userSchema;