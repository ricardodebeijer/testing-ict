import { UserMock } from './user-mock';

describe('UserMock', () => {
    it('create an instance', () => {
        expect(UserMock).toBeTruthy();
    });

    it('create an a user', () => {
        const result = UserMock.generateTestUser();

        expect(result).not.toBeNull();
    });

    it('create an 2 users', () => {
        const result = UserMock.generateTestUsers(2);
        expect(result).not.toBeNull();
    });
});
