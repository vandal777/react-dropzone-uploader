/// <reference types="react" />
import PropTypes from 'prop-types';
import { ISubmitButtonProps } from './Dropzone';
declare const SubmitButton: {
    (props: ISubmitButtonProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        buttonClassName: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        buttonStyle: PropTypes.Requireable<object>;
        disabled: PropTypes.Validator<boolean>;
        content: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onSubmit: PropTypes.Validator<(...args: any[]) => any>;
        files: PropTypes.Validator<(object | null)[]>;
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
export default SubmitButton;
