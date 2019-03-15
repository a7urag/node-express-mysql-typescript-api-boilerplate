import bookshelf from '../../config/bookshelf';
import TableNames from '../../constants/tableNames';

export const Fields = {
    id: 'user_id',
    name: 'name',
    email: 'email',
    companyId: 'company_id'
};
class UserModel extends bookshelf.Model<UserModel> {
    get tableName() {
        return TableNames.USER;
    }

    get hasTimestamps() {
        return true;
    }
}
export default UserModel;