// export const getTasks = async (id: number, token: string) =>
//     await fetch(`http://localhost:4000/api/v01/tasks/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }).then((res) => res.json());

export const createUser = async (data: any) =>
  await fetch(`http://localhost:4000/api/v01/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export const getTags = async () =>
  await fetch(`http://localhost:4000/api/v01/tags`, {
    headers: {
      // Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
