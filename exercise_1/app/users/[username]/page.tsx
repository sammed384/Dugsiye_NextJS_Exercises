import React from "react";

type Props = {
    params: { username: string };
};

export default function UserName({ params }: Props) {
    const { username } = React.use(params);
    return (
        <div>
            <p>Welcome, {username}</p>
        </div>
    );
}



