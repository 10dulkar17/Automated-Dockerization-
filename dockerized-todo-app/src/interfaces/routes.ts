export default interface IRoute {
  path: string;
  name: string;
  exact: boolean;
  element: any;
  props?: any;
}
