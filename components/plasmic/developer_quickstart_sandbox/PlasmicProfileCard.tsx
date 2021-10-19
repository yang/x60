// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: o3FDM4dLSxkErUHLgw7PDU
// Component: crjG8uKghfI
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_developer_quickstart_sandbox.module.css"; // plasmic-import: o3FDM4dLSxkErUHLgw7PDU/projectcss
import * as sty from "./PlasmicProfileCard.module.css"; // plasmic-import: crjG8uKghfI/css

import TwitterIcon from "./icons/PlasmicIcon__Twitter"; // plasmic-import: 0acDm353s6L/icon
import FacebookIcon from "./icons/PlasmicIcon__Facebook"; // plasmic-import: wyJ5Pwi4Wlu/icon
import GithubIcon from "./icons/PlasmicIcon__Github"; // plasmic-import: osaeWQdav9J/icon
import DribbbleIcon from "./icons/PlasmicIcon__Dribbble"; // plasmic-import: J5pJahd5nFx/icon

export type PlasmicProfileCard__VariantMembers = {};

export type PlasmicProfileCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicProfileCard__VariantsArgs;
export const PlasmicProfileCard__VariantProps = new Array<VariantPropType>();

export type PlasmicProfileCard__ArgsType = {
  children?: React.ReactNode;
  name?: React.ReactNode;
  title?: React.ReactNode;
};

type ArgPropType = keyof PlasmicProfileCard__ArgsType;
export const PlasmicProfileCard__ArgProps = new Array<ArgPropType>(
  "children",
  "name",
  "title"
);

export type PlasmicProfileCard__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultProfileCardProps {
  children?: React.ReactNode;
  name?: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
}

function PlasmicProfileCard__RenderFunc(props: {
  variants: PlasmicProfileCard__VariantsArgs;
  args: PlasmicProfileCard__ArgsType;
  overrides: PlasmicProfileCard__OverridesType;
  dataFetches?: PlasmicProfileCard__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.freeBox__orCg)}>
        <div className={classNames(defaultcss.all, sty.freeBox__hdWvq)}>
          <div className={classNames(defaultcss.all, sty.freeBox__uXQe)} />
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox___2Ufm)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Douglas Engelbart",
            value: args.name,
            className: classNames(sty.slotTargetName)
          })}

          {p.renderPlasmicSlot({
            defaultContents: "Computer Scientist",
            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}

          <div className={classNames(defaultcss.all, sty.freeBox__bLqka)}>
            {p.renderPlasmicSlot({
              defaultContents:
                "Best known for his work on founding the field of human–computer interaction, particularly while at his Augmentation Research Center Lab in SRI International, which resulted in creation of the computer mouse, and the development of hypertext, networked computers, and precursors to graphical user interfaces.",
              value: args.children
            })}
          </div>
        </p.Stack>

        <div className={classNames(defaultcss.all, sty.freeBox__xsTaP)}>
          <div className={classNames(defaultcss.all, sty.freeBox__nu55F)}>
            <p.PlasmicLink
              className={classNames(defaultcss.a, sty.link__mwpQd)}
              component={Link}
              href={"/" as const}
              platform={"nextjs"}
              title={"Twitter" as const}
            >
              <TwitterIcon
                className={classNames(defaultcss.all, sty.svg___3CGp)}
                role={"img"}
              />
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(defaultcss.a, sty.link__lQg8)}
              component={Link}
              href={"/" as const}
              platform={"nextjs"}
              title={"Facebook" as const}
            >
              <FacebookIcon
                className={classNames(defaultcss.all, sty.svg__mmcrz)}
                role={"img"}
              />
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(defaultcss.a, sty.link__uqowO)}
              component={Link}
              href={"/" as const}
              platform={"nextjs"}
              title={"Github" as const}
            >
              <GithubIcon
                className={classNames(defaultcss.all, sty.svg__vaGXa)}
                role={"img"}
              />
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(defaultcss.a, sty.link__iCsS6)}
              component={Link}
              href={"/" as const}
              platform={"nextjs"}
              title={"Dribbble" as const}
            >
              <DribbbleIcon
                className={classNames(defaultcss.all, sty.svg__sVmmn)}
                role={"img"}
              />
            </p.PlasmicLink>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProfileCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProfileCard__VariantsArgs;
    args?: PlasmicProfileCard__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicProfileCard__Fetches;
  } & Omit<PlasmicProfileCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProfileCard__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProfileCard__ArgProps,
      internalVariantPropNames: PlasmicProfileCard__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicProfileCard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProfileCard";
  } else {
    func.displayName = `PlasmicProfileCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProfileCard = Object.assign(
  // Top-level PlasmicProfileCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicProfileCard
    internalVariantProps: PlasmicProfileCard__VariantProps,
    internalArgProps: PlasmicProfileCard__ArgProps
  }
);

export default PlasmicProfileCard;
/* prettier-ignore-end */
