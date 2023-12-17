import className from 'classnames';
import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types';

function Button ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {

    const classes = twMerge(className('flex item-center px-3 py-1.5 border' , {
        'bg-blue-500 border-blue-500 text-white' : primary,
        'bg-gray-900 border-gray-900 text-white' : secondary,
        'bg-green-500 border-green-500 text-white' : success,
        'bg-yellow-400 border-yellow-400 text-white' : warning,
        'bg-red-500 border-red-500 text-white' : danger,
        'rounded-full' : rounded,
        'bg-white' : outline,
        'text-blue-500' : outline && primary,
        'text-gray-500' : outline && secondary,
        'text-green-500' : outline && success,
        'text-yellow-500' : outline && warning,
        'text-red-500' : outline && danger,
    }));

    return <button {...rest} className={classes}>{children}</button>;
}

Button.propTypes = {
    checkVariationValue : ({primary,secondary,success,warning,danger}) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger); 
        
        if(count > 1){
            return new Error("Only one of primary , secondary , success , warning or danger can be true");
        }
    }
}

export default Button;