export interface IComponentProps {
  mapDispatchToProps: any;
  dispatch: any;
  submitIdea: any;
  status: any;
}

export interface IComponentState {
  description: string;
  tags: string[];
  title: string;
  isSnackbarOpen: boolean;
  formSubmitted: boolean;
}

export interface IActionProperties {
  title: string;
  description: string;
  tags: string[];
}
