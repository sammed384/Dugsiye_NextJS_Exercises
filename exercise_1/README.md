# exercise_1

## 1. Grouped Routes
### - Create: `(dashboard)/notifications/page.tsx`
### - Confirm URL is `/notifications` (no "dashboard")
![exercise_1](./public/1.png)

## 2. Dynamic User Route
### Create: `users/[username]/page.tsx`
### Render: `Welcome, {username}`
![exercise_1](./public/2.png)

## 3. Catch-All Blog Route

### Create: `blog/[[...slug]]/page.tsx`
### Show: `You visited: /{slug}`
![exercise_1](./public/3.png)


## 4. API User Profile

### Create: `api/users/[username]/route.ts`
### Return: `{ username: "..." }`
![exercise_1](./public/4.png)