import { useState, useEffect } from "react";
import { getBots } from "../../utils/requests";
import { BotCollection, YourBotArmy } from "../../components";

export const BotList = () => {
  const [bots, setBots] = useState([]);
  useEffect(() => {
    async function getAllBots() {
      const data = await getBots();
      setBots(data);
    }

    getAllBots();
  }, []);

  return (
    <div className="w-full flex flex-col align-items-center justify-evenly">
      <BotCollection bots={bots} />
      <YourBotArmy bots={bots} />
    </div>
  );
};
