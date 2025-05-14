import axios from "axios";

export async function imageUplaod(data: FormData) {
  return await await axios.post(
    "https://api.imgbb.com/1/upload?key=b4dc048c04c6dc33d12850a906ada12c",
    data
  );
}
