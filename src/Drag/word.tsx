import React from 'react';
import { CSSProperties, FC, useRef, useState } from 'react';
import { useDrag } from 'react-dnd';

const Word: FC = ({ type, text, id, ...props }: any) => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [{ isDragging }, drag]: any = useDrag(() => ({
    type, // type: 指定元素的类型，只有类型相同的元素才能进行drop操作
    item: { id, type }, // item: 元素在拖拽过程中，描述该对象的数据，如果指定的是一个方法，则方法会在开始拖拽时调用，并且需要返回一个对象来描述该元素。
    // end(item, monitor): 拖拽结束的回调函数，item表示拖拽物的描述数据，monitor表示一个 DragTargetMonitor 实例
    end(item, monitor) {
      let top = 0,
        left = 0;
      if (monitor.didDrop()) {
        const dropRes = monitor.getDropResult() as any; //获取拖拽对象所处容器的数据
        if (dropRes) {
          top = dropRes.top;
          left = dropRes.left;
        }
        setOffsetX((offsetX) => {
          console.log('Word=useDrag=left'+offsetX+left);
          return offsetX + left
        });
        setOffsetY((offsetY) => offsetY + top);
      } else {
        setOffsetX(0);
        setOffsetY(0);
      }
    },
// collect：它应该返回一个描述状态的普通对象，然后返回以注入到组件中。它接收两个参数，一个 DragTargetMonitor 实例和拖拽元素描述信息item
// 第二个参数是一个数组，表示对方法更新的约束，只有当数组中的参数发生改变，才会重新生成方法，基于react的useMemo实现
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className='word_drag'
      id={id}
      ref={drag}
      style={{
        opacity: isDragging ? 0 : 1,
        top: `${offsetY}px`,
        left: `${offsetX}px`,
      }}
    >
      {text}
    </div>
  );
};
export default Word;
