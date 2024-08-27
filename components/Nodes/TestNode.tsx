import React from 'react';
import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';

const handleStyle = { left: 10 };

const TestNode = ({ data }: { data: any }) => {
  const [isEditting, setIsEditting] = React.useState(false);
  const [text, setText] = React.useState(data.label);
  const onChange = useCallback((evt: any) => {
    setText(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="flex flex-col gap-2 rounded border-2 border-base-300 p-2 bg-base-100">
        <label htmlFor="text" className="text-base-content">Text:</label>
        {isEditting ? <input
          id="text"
          name="text"
          onChange={onChange}
          className="nodrag rounded border-2 border-base-300 p-1 bg-base-200 text-base-content"
          value={text}          
          onBlur={(e: any) => {
            setIsEditting(false);
            setText((e.target as HTMLInputElement).value);
          }}
          onKeyDown={(e: any) => {
            if (e.key === 'Enter') {
              setIsEditting(false);
              setText((e.target as HTMLInputElement).value);
            }
          }}
        /> :
          <span onDoubleClick={() => setIsEditting(true)} className="text-base-content">
            {text}
          </span>
        }
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={handleStyle}
      />
    </>
  );
}

export default TestNode;