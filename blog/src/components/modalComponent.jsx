import { useState } from "react";

function Test() {
  const [title, setTitle] = useState(["가나다1, 가나다2, 가나다3"]);

  return (
    <>
      <div>
        <p>가나다</p>
      </div>
    </>
  );
}
