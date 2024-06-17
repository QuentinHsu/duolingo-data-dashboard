import { z } from 'zod'

export const UserSchema = z.object({
  id: z.number().positive().int().optional().describe('The id of the user in the database'),
  cookie: z.string().trim().max(255).includes('jwt_token'),
  user_id: z.number().int(),
  created_at: z.number().int().optional(),
  updated_at: z.number().int().optional(),
  username: z.string().trim().min(1).max(50).optional(),
  name: z.string().trim().min(1).max(50).optional(),
  totalXp: z.number().int().positive().optional(),
  picture: z.string().trim().url().max(255).optional(),
}).strict()
