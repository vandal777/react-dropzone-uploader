import React from 'react';
import { IStyleCustomization } from './Dropzone';
export declare const formatBytes: (b: number) => string;
export declare const formatDuration: (seconds: number) => string;
export declare const accepts: (file: File, accept: string) => boolean;
declare type ResolveFn<T> = (...args: any[]) => T;
export declare const resolveValue: <T = any>(value: T | ResolveFn<T>, ...args: any[]) => T;
export declare const defaultClassNames: {
    dropzone: string;
    dropzoneActive: string;
    dropzoneReject: string;
    dropzoneDisabled: string;
    input: string;
    inputLabel: string;
    inputLabelWithFiles: string;
    preview: string;
    previewImage: string;
    submitButtonContainer: string;
    submitButton: string;
};
export declare const mergeStyles: (classNames: IStyleCustomization<string>, styles: IStyleCustomization<React.CSSProperties>, addClassNames: IStyleCustomization<string>, ...args: any[]) => {
    classNames: {
        [property: string]: string;
    };
    styles: IStyleCustomization<React.CSSProperties>;
};
export declare const getFilesFromEvent: (event: React.DragEvent<HTMLElement> | React.ChangeEvent<HTMLInputElement>) => (File | DataTransferItem)[];
export {};
