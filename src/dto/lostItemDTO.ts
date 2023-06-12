import {LostItem} from '@prisma/client';

export interface Image{
  id: number;
  path: string;
}

export type LostItemDTO = LostItem & {
  image:Image[];
}