import { ChangeEvent, FormEvent, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import Login from "./Login";
import SubmitButton from "./SubmitButton";
import { gapi } from "gapi-script";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const API_KEY = import.meta.env.VITE_API_KEY;
const SCOPES = "https://www.googleapis.com/auth/documents";

export default function Hermes() {
  const [note, setNote] = useState("");
  const [visible, setVisible] = useState(false);

  useHotkeys("ctrl+h", () => setVisible((visible) => !visible), [visible]);

  const disabled = note.length == 0;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (note.length !== 0) {
      // Make req to GDoc
      setNote("");
    }
  };

  return (
    <>
      <div>
        {visible ? (
          <>
            <div className="flex flex-col items-center justify-center relative">
              <div className="bg-gradient-to-r w-1/2 rounded-xl p-1 from-amber-200 via-indigo-300 to-orange-400">
                <div className="flex-col items-center justify-center flex bg-slate-900 rounded-lg">
                  <form
                    className="flex justify-center w-full"
                    onSubmit={handleSubmit}
                  >
                    <input
                      className="grow placeholder-slate-400 text-slate-400 ml-4 my-1 bg-slate-900"
                      type="text"
                      id="New Note"
                      onChange={handleChange}
                      value={note}
                      placeholder="Start typing..."
                    />
                    <SubmitButton
                      disabled={disabled}
                      handleSubmit={handleSubmit}
                    />
                  </form>
                </div>
              </div>
              <div className="absolute top-11 bg-indigo-300 pl-0.5 pr-0.5 pb-0 rounded-bl-lg rounded-br-lg">
                <Login />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
