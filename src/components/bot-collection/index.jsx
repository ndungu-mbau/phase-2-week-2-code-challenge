import PropTypes from "prop-types";
import { Card } from "../card";

export const BotCollection = ({ bots }) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {bots.map((bot) => (
        <Card key={bot.id} bot={bot} />
      ))}
    </div>
  );
};

BotCollection.propTypes = {
  bots: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
