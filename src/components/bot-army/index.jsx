import PropTypes from "prop-types";
import { Card } from "../card";

export const YourBotArmy = ({ bots }) => {
  return (
    <div className="grid grid-cols-6 gap-4 mt-8">
      <div className="text-2xl font-bold">Your bot army</div>
      {bots.map((bot) => (
        <Card key={bot.id} bot={bot} />
      ))}
    </div>
  );
};

YourBotArmy.propTypes = {
  bots: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
