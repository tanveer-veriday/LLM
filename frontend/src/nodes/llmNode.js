import { BaseNode } from '../components/baseNode.js';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      description="This is an LLM."
      inputs={[`${id}-system`, `${id}-prompt`]}
      outputs={[`${id}-response`]}
    />
   );
};