# Schema Information

## users
| Column name | Data type | Details |
| ----------- | --------- | ------- |
| id          | integer   | not null, primary key|
| username    | string    | not null, indexed, unique|
| email       | string    | not null, indexed, unique|
| password_digest| string | not null|
