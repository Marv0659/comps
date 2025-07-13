import Button from "../components/Button.js";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded>
          <GoBell />
          click me
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload />
          888
        </Button>
      </div>
      <div>
        <Button danger>
          <GoDatabase />
          123123
        </Button>
      </div>
      <div>
        <Button success>ssdf</Button>
      </div>
      <div>
        <Button>Asdfsdfsdfpp</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
