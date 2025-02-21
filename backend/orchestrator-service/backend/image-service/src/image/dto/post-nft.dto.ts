import { IsNotEmpty, IsString } from 'class-validator';

export class PostNFTDto {
  @IsNotEmpty()
  @IsString()
  nameNFT: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  url: string;
}
