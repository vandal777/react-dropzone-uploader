/// <reference types="react" />
import PropTypes from 'prop-types';
import { IInputProps } from './Dropzone';
declare const Input: {
    (props: IInputProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        labelClassName: PropTypes.Requireable<string>;
        labelWithFilesClassName: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        labelStyle: PropTypes.Requireable<object>;
        labelWithFilesStyle: PropTypes.Requireable<object>;
        getFilesFromEvent: PropTypes.Validator<(...args: any[]) => any>;
        accept: PropTypes.Validator<string>;
        multiple: PropTypes.Validator<boolean>;
        disabled: PropTypes.Validator<boolean>;
        content: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        withFilesContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onFiles: PropTypes.Validator<(...args: any[]) => any>;
        files: PropTypes.Validator<any[]>;
        extra: PropTypes.Validator<PropTypes.InferProps<{
            active: PropTypes.Validator<boolean>;
            reject: PropTypes.Validator<boolean>;
            dragged: PropTypes.Validator<any[]>;
            accept: PropTypes.Validator<string>;
            multiple: PropTypes.Validator<boolean>;
            minSizeBytes: PropTypes.Validator<number>;
            maxSizeBytes: PropTypes.Validator<number>;
            maxFiles: PropTypes.Validator<number>;
        }>>;
    };
};
export default Input;
