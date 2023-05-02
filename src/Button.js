import React, { useState, useEffect } from 'react';
// import { HTML5Backend } from 'react-dnd-html5-backend'
// import { DndProvider } from 'react-dnd'
import { useDrag } from 'react-dnd'
import { useDrop } from 'react-dnd'
import { reqToolList } from './mock/request';
import CusDrag from './Drag/index';

const Button = (props) => {
  const type = 'tool1';

  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  // const [dragList, setDragList] = useState([]);
  const [list, setList] = useState([]); 
  const [{ isDragging }, drag] = useDrag(() => ({
    type, // type: 指定元素的类型，只有类型相同的元素才能进行drop操作
    item: { type, tmp: '测试' }, // item: 元素在拖拽过程中，描述该对象的数据，如果指定的是一个方法，则方法会在开始拖拽时调用，并且需要返回一个对象来描述该元素。
    end(item, monitor) {
      let top = 0,
        left = 0;
      if (monitor.didDrop()) {
        const dropRes = monitor.getDropResult(); //获取拖拽对象所处容器的数据
        if (dropRes) {
          top = dropRes.top;
          left = dropRes.left;
        }
        setOffsetX((offsetX) => {
          console.log('useDrag==left========='+offsetX + left);
          console.log(left);
          console.log(offsetX);
          return offsetX + left;
        });
        setOffsetY((offsetY) => offsetY + top);
        console.log('让我看看list的数据==========');
        console.log(list);
        setList([{id: '000001', text: '箭头工具', type: 'tool1', offsetX: 0, offsetY: 0}])
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


  const getData = async () => {
    // const ret = await reqToolList();
    // const data = ret.data.data || [];
    // setList(data);

    setList([{id: '000001', text: '箭头工具', type: 'tool1'}])
  };

  // const [{ isOver, canDrop }, drop] = useDrop(
  //   () => ({
  //     // 指定接收元素的类型，只有类型相同的元素才能进行drop操作
  //     accept: 'tool1',
  //     // type,
  //     // drop(item, monitor): 有拖拽物放置到元素上触发的回调方法，item表示拖拽物的描述数据，monitor表示 DropTargetMonitor实例，该方法返回一个对象，对象的数据可以由拖拽物的monitor.getDropResult方法获得
  //     drop(_item, monitor) {
  //       const delta = monitor.getDifferenceFromInitialOffset() || {};
  //       const left = Math.round(delta.x || 0);
  //       const top = Math.round(delta.y || 0);
  //       setOffsetX((offsetX) => {
  //         // console.log('useDrop==left=====');
  //         // console.log(offsetX + left);
  //         return offsetX + left;
  //       });
  //       setOffsetY((offsetY) => offsetY + top);
  //       return { top, left };
  //     },
  //     // 判断拖拽物是否可以放置，item表示拖拽物的描述数据，monitor表示 DropTargetMonitor实例，返回一个bool值
  //     canDrop: (_item, monitor) => {
  //       const item = monitor.getItem();
  //       return item.type === type;
  //     },
  //     collect: (monitor) => ({
  //       isOver: !!monitor.isOver(),
  //       canDrop: !!monitor.canDrop(),
  //     }),
  //   }),
  //   [],
  // );


  useEffect(() => {
    getData();
  }, []);

  return (
    // <DndProvider backend={props.HTML5Backend}>
      <div>
`      <div id="app2-wrap" style={{width: '300px',
        height: '600px',
        border: '4px solid #333',
        background: 'white',
        position: 'absolute',
        right: '0px'
        }}>
          <h1>这是app2的内容【remote】</h1><br />
          {/* <div onClick={() => {props.handleChange && props.handleChange('工具01')}}>工具01</div> */}
          {/* <div style={{ position: 'absolute', opacity: isDragging ? 0.5 : 1, top: `${offsetY}px`,
        left: `${offsetX}px` }} ref={drag}>工具02</div> */}
          {(list || []).map(item => {
              return <div style={{ position: 'absolute', opacity: isDragging ? 0.5 : 1, top: `${offsetY}px`,
              left: `${offsetX}px` }} ref={drag} key={item.id} xxx="xxx">{item.text}</div>
          })}
          {/* <div style={{width: '200px', height: '200px', background: 'blue'}} ref={drop} ></div> */}
       </div>

        {/* <div ref={drop} style={{width:'100px', height: '100px', background: isOver ? '#FFAA00' : '#FFFFFF' }}>
          Container
        </div> */}
        {/* <CusDrag /> */}
       
      </div>
      // </DndProvider>
  );
};

export default Button;
