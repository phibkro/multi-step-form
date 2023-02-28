export default interface content extends children, stylable{
  title?: string,
  header?: string,
  p?: string,
  img?: string,
  alt?: string,
}
export interface link {
  href: string,
  p: string,
}
export interface stylable {
  className?: string,
}
export interface children {
  children?: React.ReactNode,
}