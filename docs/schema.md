# Schema Information

## users
| Column name | Data type | Details |
| ----------- | --------- | ------- |
| id          | integer   | not null, primary key|
| username    | string    | not null, indexed, unique|
| email       | string    | not null, indexed, unique|
| password_digest| string | not null|
| session_token| string   | not null, indexed, unique|

## spots
| Column name | Data type | Details |
| ----------- | --------- | ------- |
| id          | integer   | not null, primary key|
| host_id     | integer   | not null|
| longitude   | integer   | not null|
| latitude    | integer   | not null|

## bookings
| Column name | Data type | Details |
| ----------- | --------- | ------- |
| id          | integer   | not null, primary key|
| spot_id     | integer   | not null, indexed|
| guest_id    | integer   | not null, indexed|
| start_date  | datetime  | not null|
| end_date    | datetime  | not null|

## reviews
| Column name | Data type | Details |
| ----------- | --------- | ------- |
| id          | integer   | not null, primary key|
| spot_id     | integer   | not null, indexed|
| reviewer_id | integer   | not null, indexed|
| body        | string    | not null|
| rating      | integer   | not null|
