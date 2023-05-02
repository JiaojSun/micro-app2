import React from 'react';
import { useDrop } from 'react-dnd';

function Classification({ type, title }: any) {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      // 指定接收元素的类型，只有类型相同的元素才能进行drop操作
      accept: type,
      // type,
      // drop(item, monitor): 有拖拽物放置到元素上触发的回调方法，item表示拖拽物的描述数据，monitor表示 DropTargetMonitor实例，该方法返回一个对象，对象的数据可以由拖拽物的monitor.getDropResult方法获得
      drop(_item: any, monitor: any) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(delta.x);
        const top = Math.round(delta.y);
        console.log('Classification=useDrop=left'+left);
        return { top, left };
      },
      // 判断拖拽物是否可以放置，item表示拖拽物的描述数据，monitor表示 DropTargetMonitor实例，返回一个bool值
      canDrop: (_item, monitor) => {
        const item = monitor.getItem() as any;
        return item.type === type;
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [],
  );

  // const [{ isOver, canDrop }, drop] = useDrop({
  //   accept: type,
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver(),
  //     canDrop: !!monitor.canDrop(),
  //   }),
  //   canDrop: (_item, monitor) => {
  //     const item = monitor.getItem() as any;
  //     return item.type === type;
  //   },
  // });

  return (
    <div className='word_drop_container'>
      <div className='word_drop_text'>{title}</div>
      <div
        className='word_drop'
        ref={drop}
        style={{ backgroundColor: canDrop ? 'rgba(7,193,96,0.3)' : 'transparent' }}
      ></div>
    </div>
  );
}

export default Classification;
