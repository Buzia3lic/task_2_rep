import React from 'react';
import { Loader, Segment } from 'semantic-ui-react';

function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <Segment secondary>
        <Loader size='massive' active inline='centered' />
      </Segment>

    );
  };
}
export default WithListLoading;