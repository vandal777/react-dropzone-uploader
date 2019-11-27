import React from 'react';
import LayoutDefault from './Layout';
import InputDefault from './Input';
import PreviewDefault from './Preview';
import SubmitButtonDefault from './SubmitButton';
import { formatBytes, formatDuration, accepts, defaultClassNames, getFilesFromEvent as defaultGetFilesFromEvent } from './utils';
export declare type StatusValue = 'rejected_file_type' | 'rejected_max_files' | 'preparing' | 'error_file_size' | 'error_validation' | 'ready' | 'started' | 'getting_upload_params' | 'error_upload_params' | 'uploading' | 'exception_upload' | 'aborted' | 'restarted' | 'removed' | 'error_upload' | 'headers_received' | 'done';
export declare type MethodValue = 'delete' | 'get' | 'head' | 'options' | 'patch' | 'post' | 'put' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT';
export interface IMeta {
    id: string;
    status: StatusValue;
    type: string;
    name: string;
    uploadedDate: string;
    percent: number;
    size: number;
    lastModifiedDate: string;
    previewUrl?: string;
    duration?: number;
    width?: number;
    height?: number;
    videoWidth?: number;
    videoHeight?: number;
    validationError?: any;
}
export interface IFileWithMeta {
    file: File;
    meta: IMeta;
    cancel: () => void;
    restart: () => void;
    remove: () => void;
    xhr?: XMLHttpRequest;
}
export interface IExtra {
    active: boolean;
    reject: boolean;
    dragged: DataTransferItem[];
    accept: string;
    multiple: boolean;
    minSizeBytes: number;
    maxSizeBytes: number;
    maxFiles: number;
}
export interface IUploadParams {
    url: string;
    method?: MethodValue;
    body?: string | FormData | ArrayBuffer | Blob | File | URLSearchParams;
    fields?: {
        [name: string]: string | Blob;
    };
    headers?: {
        [name: string]: string;
    };
    meta?: {
        [name: string]: any;
    };
}
export declare type CustomizationFunction<T> = (allFiles: IFileWithMeta[], extra: IExtra) => T;
export interface IStyleCustomization<T> {
    dropzone?: T | CustomizationFunction<T>;
    dropzoneActive?: T | CustomizationFunction<T>;
    dropzoneReject?: T | CustomizationFunction<T>;
    dropzoneDisabled?: T | CustomizationFunction<T>;
    input?: T | CustomizationFunction<T>;
    inputLabel?: T | CustomizationFunction<T>;
    inputLabelWithFiles?: T | CustomizationFunction<T>;
    preview?: T | CustomizationFunction<T>;
    previewImage?: T | CustomizationFunction<T>;
    submitButtonContainer?: T | CustomizationFunction<T>;
    submitButton?: T | CustomizationFunction<T>;
}
export interface IExtraLayout extends IExtra {
    onFiles(files: File[]): void;
    onCancelFile(file: IFileWithMeta): void;
    onRemoveFile(file: IFileWithMeta): void;
    onRestartFile(file: IFileWithMeta): void;
}
export interface ILayoutProps {
    files: IFileWithMeta[];
    extra: IExtraLayout;
    input: React.ReactNode;
    previews: React.ReactNode[] | null;
    submitButton: React.ReactNode;
    dropzoneProps: {
        ref: React.RefObject<HTMLDivElement>;
        className: string;
        style?: React.CSSProperties;
        onDragEnter(event: React.DragEvent<HTMLElement>): void;
        onDragOver(event: React.DragEvent<HTMLElement>): void;
        onDragLeave(event: React.DragEvent<HTMLElement>): void;
        onDrop(event: React.DragEvent<HTMLElement>): void;
    };
}
interface ICommonProps {
    files: IFileWithMeta[];
    extra: IExtra;
}
export interface IPreviewProps extends ICommonProps {
    meta: IMeta;
    className?: string;
    imageClassName?: string;
    style?: React.CSSProperties;
    imageStyle?: React.CSSProperties;
    fileWithMeta: IFileWithMeta;
    isUpload: boolean;
    canCancel: boolean;
    canRemove: boolean;
    canRestart: boolean;
}
export interface IInputProps extends ICommonProps {
    className?: string;
    labelClassName?: string;
    labelWithFilesClassName?: string;
    style?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    labelWithFilesStyle?: React.CSSProperties;
    getFilesFromEvent: (event: React.ChangeEvent<HTMLInputElement>) => Promise<File[]>;
    accept: string;
    multiple: boolean;
    disabled: boolean;
    content?: React.ReactNode;
    withFilesContent?: React.ReactNode;
    onFiles: (files: File[]) => void;
}
export interface ISubmitButtonProps extends ICommonProps {
    className?: string;
    buttonClassName?: string;
    style?: React.CSSProperties;
    buttonStyle?: React.CSSProperties;
    disabled: boolean;
    content?: React.ReactNode;
    onSubmit: (files: IFileWithMeta[]) => void;
}
declare type ReactComponent<Props> = (props: Props) => React.ReactNode | React.Component<Props>;
export interface IDropzoneProps {
    onChangeStatus?(file: IFileWithMeta, status: StatusValue, allFiles: IFileWithMeta[]): {
        meta: {
            [name: string]: any;
        };
    } | void;
    getUploadParams?(file: IFileWithMeta): IUploadParams | Promise<IUploadParams>;
    onSubmit?(successFiles: IFileWithMeta[], allFiles: IFileWithMeta[]): void;
    getFilesFromEvent?: (event: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement>) => Promise<File[]> | File[];
    getDataTransferItemsFromEvent?: (event: React.DragEvent<HTMLElement>) => Promise<DataTransferItem[]> | DataTransferItem[];
    accept: string;
    multiple: boolean;
    minSizeBytes: number;
    maxSizeBytes: number;
    maxFiles: number;
    validate?(file: IFileWithMeta): any;
    autoUpload: boolean;
    timeout?: number;
    initialFiles?: File[];
    disabled: boolean | CustomizationFunction<boolean>;
    canCancel: boolean | CustomizationFunction<boolean>;
    canRemove: boolean | CustomizationFunction<boolean>;
    canRestart: boolean | CustomizationFunction<boolean>;
    inputContent: React.ReactNode | CustomizationFunction<React.ReactNode>;
    inputWithFilesContent: React.ReactNode | CustomizationFunction<React.ReactNode>;
    submitButtonDisabled: boolean | CustomizationFunction<boolean>;
    submitButtonContent: React.ReactNode | CustomizationFunction<React.ReactNode>;
    classNames: IStyleCustomization<string>;
    styles: IStyleCustomization<React.CSSProperties>;
    addClassNames: IStyleCustomization<string>;
    LayoutComponent?: ReactComponent<ILayoutProps>;
    PreviewComponent?: ReactComponent<IPreviewProps>;
    InputComponent?: ReactComponent<IInputProps>;
    SubmitButtonComponent?: ReactComponent<ISubmitButtonProps>;
}
declare class Dropzone extends React.Component<IDropzoneProps, {
    active: boolean;
    dragged: (File | DataTransferItem)[];
}> {
    static defaultProps: IDropzoneProps;
    protected files: IFileWithMeta[];
    protected mounted: boolean;
    protected dropzone: React.RefObject<HTMLDivElement>;
    protected dragTimeoutId?: number;
    constructor(props: IDropzoneProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IDropzoneProps): void;
    componentWillUnmount(): void;
    forceUpdate: () => void;
    getFilesFromEvent: () => ((event: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement>) => (File | DataTransferItem)[]) | ((event: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement>) => File[] | Promise<File[]>);
    getDataTransferItemsFromEvent: () => ((event: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement>) => (File | DataTransferItem)[]) | ((event: React.DragEvent<HTMLElement>) => DataTransferItem[] | Promise<DataTransferItem[]>);
    handleDragEnter: (e: React.DragEvent<HTMLElement>) => Promise<void>;
    handleDragOver: (e: React.DragEvent<HTMLElement>) => Promise<void>;
    handleDragLeave: (e: React.DragEvent<HTMLElement>) => void;
    handleDrop: (e: React.DragEvent<HTMLElement>) => Promise<void>;
    handleDropDisabled: (e: React.DragEvent<HTMLElement>) => void;
    handleChangeStatus: (fileWithMeta: IFileWithMeta) => void;
    handleSubmit: (files: IFileWithMeta[]) => void;
    handleCancel: (fileWithMeta: IFileWithMeta) => void;
    handleRemove: (fileWithMeta: IFileWithMeta) => void;
    handleRestart: (fileWithMeta: IFileWithMeta) => void;
    handleFiles: (files: File[]) => void;
    handleFile: (file: File, id: string) => Promise<void>;
    generatePreview: (fileWithMeta: IFileWithMeta) => Promise<void>;
    uploadFile: (fileWithMeta: IFileWithMeta) => Promise<void>;
    render(): JSX.Element;
}
export default Dropzone;
export { LayoutDefault as Layout, InputDefault as Input, PreviewDefault as Preview, SubmitButtonDefault as SubmitButton, formatBytes, formatDuration, accepts, defaultClassNames, defaultGetFilesFromEvent as getFilesFromEvent, };
