/* eslint-disable no-magic-numbers */
import faker from '@faker-js/faker';
import { IComment, IPost, IUser } from './types';

export const Users = new Map<string, IUser>();
export const Posts = new Map<string, IPost>();
export const Comments = new Map<string, IComment>();

faker.seed(123);

// Create 100 users, posts and comments
for (let i = 1; i <= 100; i += 1) {
  Users.set(String(i), {
    __typename: 'User',
    id: String(i),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  });

  Posts.set(String(i), {
    __typename: 'Post',
    id: String(i),
    authorId: String(faker.datatype.number({ min: 1, max: 100 })),
    title: faker.lorem.text(),
    content: faker.lorem.paragraphs(2),
  });

  Comments.set(String(i), {
    __typename: 'Comment',
    id: String(i),
    authorId: String(faker.datatype.number({ min: 1, max: 100 })),
    postId: String(faker.datatype.number({ min: 1, max: 100 })),
    comment: faker.lorem.text(),
  });
}
