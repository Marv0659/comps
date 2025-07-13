import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({ children, primary, secondary, success, danger, warning, outline, rounded, ...rest }) {
  const classes = twMerge(
    className(rest.className, "flex items-center px-3 py-1.5 border", {
      "border-blue-600 bg-blue-500 text-white": primary,
      "border-gray-600 bg-gray-500 text-white": secondary,
      "border-green-600 bg-green-500 text-white": success,
      "border-yellow-600 bg-yellow-500 text-white": warning,
      "border-red-600 bg-red-500 text-white": danger,
      "border-blue-600 bg-white text-blue-600": outline,
      "rounded-full": rounded,
      rounded: !rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-500": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    })
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.protoTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);

    if (count > 1) {
      return new Error("Only one of primary, secondary, success, warning, or danger can be true.");
    }
  },
};

export default Button;
