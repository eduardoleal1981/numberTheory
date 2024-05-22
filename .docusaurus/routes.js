import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e21'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '245'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4c4'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fb9'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'aba'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '41a'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '8e5'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'bca'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'b0e'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '086'),
            routes: [
              {
                path: '/docs/axiomas-peano/pricipio-do-sucessor',
                component: ComponentCreator('/docs/axiomas-peano/pricipio-do-sucessor', '1cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/axiomas-peano/principio-da-inducao',
                component: ComponentCreator('/docs/axiomas-peano/principio-da-inducao', '8f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/axiomas-peano/principio-da-nao-trivialidade',
                component: ComponentCreator('/docs/axiomas-peano/principio-da-nao-trivialidade', 'cca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/axiomas-peano/zero-e-um-numero-natural',
                component: ComponentCreator('/docs/axiomas-peano/zero-e-um-numero-natural', 'de5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/axiomas-de-peano',
                component: ComponentCreator('/docs/category/axiomas-de-peano', 'f67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/teoria-elementar-dos-conjuntos',
                component: ComponentCreator('/docs/category/teoria-elementar-dos-conjuntos', '96d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/teoria-elementar-dos-conjuntos/conjutos',
                component: ComponentCreator('/docs/teoria-elementar-dos-conjuntos/conjutos', 'c2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/teoria-elementar-dos-conjuntos/funcoes',
                component: ComponentCreator('/docs/teoria-elementar-dos-conjuntos/funcoes', '1f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/teoria-elementar-dos-conjuntos/relacoes-binarias',
                component: ComponentCreator('/docs/teoria-elementar-dos-conjuntos/relacoes-binarias', '437'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/teoria-elementar-dos-conjuntos/relacoes-de-equivalencia',
                component: ComponentCreator('/docs/teoria-elementar-dos-conjuntos/relacoes-de-equivalencia', '072'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/teoria-elementar-dos-conjuntos/relacoes-de-ordem',
                component: ComponentCreator('/docs/teoria-elementar-dos-conjuntos/relacoes-de-ordem', '4d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
