// llmNode.js

import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, data ,title ="default" , description= "descripton" }) => {

  return (
    <div style={{width: 200, height: 80, border: '1px solid black'}}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{top: `${100/3}%`}}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{top: `${200/3}%`}}
      />
      <div>
        <span>{{title}}</span>
      </div>
      <div>
        <span>{{description}}</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
       <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </div>
  );
}
