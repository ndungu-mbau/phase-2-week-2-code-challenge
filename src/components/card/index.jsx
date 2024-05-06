import PropTypes from "prop-types";

export const Card = ({ bot: { name, avatar_url, bot_class } }) => {
  return (
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover w-full h-48 mt-2"
        src={avatar_url}
        alt={name}
      />
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
          {name}
        </h1>
        <hr />
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {bot_class}
        </p>
      </div>

      {/* <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
          Add
        </button>
      </div> */}
    </div>
  );
};

Card.propTypes = {
  bot: PropTypes.objectOf(PropTypes.string),
};
