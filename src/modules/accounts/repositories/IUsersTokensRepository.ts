import { ICreateUsersTokensDTO } from '../dtos/ICreateUsersTokensDTO';
import { UsersTokens } from '../infra/typeorm/entities/UsersTokens';

interface IUsersTokensRepository {
  findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string,
  ): Promise<UsersTokens>;
  findByRefreshToken(refresh_token: string): Promise<UsersTokens>;
  create({
    user_id,
    expires_date,
    refresh_token,
  }: ICreateUsersTokensDTO): Promise<UsersTokens>;
  deleteById(id: string): Promise<void>;
}

export { IUsersTokensRepository };
