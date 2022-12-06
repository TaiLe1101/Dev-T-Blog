import React from 'react';

export interface Routes {
  path: string;
  component: React.FC;
  layout?: React.FC | null;
}
