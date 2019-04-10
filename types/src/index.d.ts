/// <reference types="react" />
import * as React from 'react';
import * as PropTypes from 'prop-types';
import SizeAndPositionManager, { ItemSize } from './SizeAndPositionManager';
import { ALIGNMENT, DIRECTION, SCROLL_CHANGE_REASON } from './constants';
export interface ItemStyle {
    position: 'absolute';
    top?: number;
    left: number;
    width: string | number;
    height?: number;
}
export interface ItemInfo {
    index: number;
    style: ItemStyle;
}
export interface RenderedRows {
    startIndex: number;
    stopIndex: number;
}
export interface Props {
    className?: string;
    estimatedItemSize?: number;
    height: number | string;
    itemCount: number;
    itemSize: ItemSize;
    overscanCount?: number;
    scrollOffset?: number;
    scrollToIndex?: number;
    scrollToAlignment?: ALIGNMENT;
    scrollDirection?: DIRECTION;
    style?: any;
    width?: number | string;
    shouldScrollAlign?: boolean;
    onItemsRendered?({startIndex, stopIndex}: RenderedRows): void;
    onScroll?(offset: number, event: React.UIEvent<HTMLDivElement>): void;
    onAlign?(index: number): void;
    renderItem(itemInfo: ItemInfo): React.ReactNode;
}
export interface State {
    offset: number;
    scrollChangeReason: SCROLL_CHANGE_REASON;
    scrolling: boolean;
}
export default class VirtualList extends React.PureComponent<Props, State> {
    static defaultProps: {
        overscanCount: number;
        scrollDirection: DIRECTION;
        width: string;
        shouldScrollAlign: boolean;
    };
    static propTypes: {
        estimatedItemSize: PropTypes.Requireable<any>;
        height: PropTypes.Validator<any>;
        itemCount: PropTypes.Validator<any>;
        itemSize: PropTypes.Validator<any>;
        onItemsRendered: PropTypes.Requireable<any>;
        overscanCount: PropTypes.Requireable<any>;
        renderItem: PropTypes.Validator<any>;
        scrollOffset: PropTypes.Requireable<any>;
        scrollToIndex: PropTypes.Requireable<any>;
        scrollToAlignment: PropTypes.Requireable<any>;
        scrollDirection: PropTypes.Validator<any>;
        width: PropTypes.Validator<any>;
        shouldScrollAlign: PropTypes.Requireable<any>;
    };
    scrollAnimation: number;
    delayAlignment: number;
    scrollAnimating: boolean;
    sizeAndPositionManager: SizeAndPositionManager;
    state: {
        offset: number;
        scrollChangeReason: SCROLL_CHANGE_REASON;
        scrolling: boolean;
    };
    private rootNode;
    private styleCache;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    componentDidUpdate(_: Props, prevState: State): void;
    findAlignedIndex: (offset: number) => number;
    handleScroll: (e: React.UIEvent<HTMLDivElement>) => void;
    getEstimatedItemSize(props?: Readonly<{
        children?: React.ReactNode;
    }> & Readonly<Props>): number;
    getNodeOffset(): any;
    scrollTo(value: number): void;
    scrollAnimTo(targetPos: number): void;
    getOffsetForIndex(index: number, scrollToAlignment?: "auto" | "center" | "end" | "start" | undefined, itemCount?: number): number;
    getSize(index: number): number;
    getStyle(index: number): ItemStyle;
    recomputeSizes(startIndex?: number): void;
    render(): JSX.Element;
    private getRef;
    private getRootNode;
}
