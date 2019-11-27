/// <reference types="react" />
import PropTypes from 'prop-types';
import { ILayoutProps } from './Dropzone';
declare const Layout: {
    (props: ILayoutProps): JSX.Element;
    propTypes: {
        input: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        previews: PropTypes.Requireable<(string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray | null)[]>;
        submitButton: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        dropzoneProps: PropTypes.Validator<PropTypes.InferProps<{
            ref: PropTypes.Validator<any>;
            className: PropTypes.Validator<string>;
            style: PropTypes.Requireable<object>;
            onDragEnter: PropTypes.Validator<(...args: any[]) => any>;
            onDragOver: PropTypes.Validator<(...args: any[]) => any>;
            onDragLeave: PropTypes.Validator<(...args: any[]) => any>;
            onDrop: PropTypes.Validator<(...args: any[]) => any>;
        }>>;
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
            onFiles: PropTypes.Validator<(...args: any[]) => any>;
            onCancelFile: PropTypes.Validator<(...args: any[]) => any>;
            onRemoveFile: PropTypes.Validator<(...args: any[]) => any>;
            onRestartFile: PropTypes.Validator<(...args: any[]) => any>;
        }>>;
    };
};
export default Layout;
