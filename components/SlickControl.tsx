import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export const SimilarPrev = (props: any) => (
    <div className='absolute lg:-top-12 -top-12 lg:right-8 right-12 transform -translate-x-1/2 -translate-y-1/2 z-[8]'>
        <button onClick={props.onClick} className="p-[10px] rounded border-main border border-solid">
            <IoChevronBackOutline  className="text-main text-[20px]"/>
        </button>
    </div>
);

export const SimilarNext = (props: any) => (
    <div className='absolute lg:-top-12 -top-12 -right-4 lg:-right-6 transform -translate-x-1/2 -translate-y-1/2 z-[8]'>
        <button onClick={props.onClick} className="p-[10px] rounded border-main border border-solid">
            <IoChevronForwardOutline  className="text-main text-[20px]"/>
        </button>
    </div>
);

